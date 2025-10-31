import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  TextField,
  Button,
  Alert,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Chip,
} from "@mui/material";
import { Form, Input, Button as AntButton, Card, Space, Table as AntTable, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";

// Login Form Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// Sample data for tables
interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: UserData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "Inactive" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "User", status: "Active" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "Active" },
];

// MUI Login Form
function MuiLoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    alert(`MUI Login Submitted:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "grid", gap: 2, maxWidth: 400 }}
    >
      <Typography variant="h6" gutterBottom>
        Material-UI Login
      </Typography>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </Box>
  );
}

// AntD Login Form
function AntDLoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values: LoginFormValues) => {
    alert(`AntD Login Submitted:\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Card title="Ant Design Login" style={{ maxWidth: 400 }}>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <AntButton type="primary" htmlType="submit" block>
            Login
          </AntButton>
        </Form.Item>
      </Form>
    </Card>
  );
}

// MUI Table with Sorting
function MuiTable() {
  const [orderBy, setOrderBy] = useState<keyof UserData | "">("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [filteredData, setFilteredData] = useState<UserData[]>(sampleData);

  const handleSort = (property: keyof UserData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[property];
      const bVal = b[property];
      if (aVal < bVal) return isAsc ? 1 : -1;
      if (aVal > bVal) return isAsc ? -1 : 1;
      return 0;
    });
    setFilteredData(sorted);
  };

  const handleFilter = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredData(sampleData);
      return;
    }
    const filtered = sampleData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h6">Material-UI Table</Typography>
      <TextField
        placeholder="Search by name, email, or role..."
        size="small"
        fullWidth
        onChange={(e) => handleFilter(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleSort("id")}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "email"}
                  direction={orderBy === "email" ? order : "asc"}
                  onClick={() => handleSort("email")}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "role"}
                  direction={orderBy === "role" ? order : "asc"}
                  onClick={() => handleSort("role")}
                >
                  Role
                </TableSortLabel>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === "Active" ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

// AntD Table with Sorting and Filtering
function AntDTable() {
  const [searchText, setSearchText] = useState("");

  const columns: ColumnsType<UserData> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role.localeCompare(b.role),
      filters: [
        { text: "Admin", value: "Admin" },
        { text: "User", value: "User" },
        { text: "Editor", value: "Editor" },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      onFilter: (value, record) => record.status === value,
    },
  ];

  const filteredData = sampleData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.role.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="h6">Ant Design Table</Typography>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="Search by name, email, or role..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
        />
        <AntTable
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </Space>
    </Box>
  );
}

// Week 11 Page Component
export default function Week11() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 11 Labs - Framework Trade-Offs (MUI → AntD)
      </Typography>

      <Box sx={{ display: "grid", gap: 4 }}>
        {/* Main Lab: Login Forms Comparison */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Lab: Login Forms in MUI and AntD
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Alert severity="info" sx={{ mb: 3 }}>
            Build a login form in both Material-UI and Ant Design. Compare developer effort vs
            accessibility outcome.
          </Alert>

          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <MuiLoginForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <AntDLoginForm />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Comparison Notes:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <strong>MUI:</strong> Uses react-hook-form + zod for validation. Requires more
                boilerplate with Controller components.
              </li>
              <li>
                <strong>AntD:</strong> Built-in Form component with validation rules. Less code
                required, more declarative.
              </li>
              <li>
                <strong>Accessibility:</strong> Both frameworks provide good accessibility by
                default. Run Lighthouse audits to compare scores.
              </li>
            </Box>
          </Box>
        </Paper>

        {/* Stretch Goal: Tables with Sorting & Filtering */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Stretch Goal: Tables with Sorting & Filtering
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MuiTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <AntDTable />
            </Grid>
          </Grid>
        </Paper>

        {/* Reflection Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Reflection Questions
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: "grid", gap: 2 }}>
            <Typography variant="body1">
              <strong>1. Which framework felt easier to use?</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
              Consider the setup time, code verbosity, and learning curve.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>2. Which framework felt safer in terms of accessibility?</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
              Compare Lighthouse accessibility scores. Check keyboard navigation, screen reader
              support, and ARIA attributes.
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>3. Developer Effort vs Accessibility Outcome:</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
              Did the framework that required less code also achieve better accessibility scores?
              Document your findings.
            </Typography>
          </Box>
        </Paper>

        {/* Lighthouse Instructions */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Running Lighthouse Audits
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box component="ol" sx={{ pl: 3 }}>
            <li>Open Chrome DevTools (F12)</li>
            <li>Navigate to the "Lighthouse" tab</li>
            <li>Select "Accessibility" category</li>
            <li>Choose "Mobile" or "Desktop"</li>
            <li>Click "Generate report"</li>
            <li>Compare scores between MUI and AntD implementations</li>
          </Box>
          <Alert severity="success" sx={{ mt: 2 }}>
            Both frameworks should score well on accessibility, but there may be differences in
            specific areas. Document your findings!
          </Alert>
        </Paper>
      </Box>
    </Container>
  );
}

