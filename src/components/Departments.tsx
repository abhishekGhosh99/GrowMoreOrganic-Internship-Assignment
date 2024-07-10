import { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Checkbox,
  Container,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const departments = [
  { name: "customer_service", subDepartments: ["support", "customer_success"] },
  {
    name: "design",
    subDepartments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentList = () => {
  const [open, setOpen] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (name: string) => {
    setSelected((prevSelected) => {
      const newSelected = { ...prevSelected, [name]: !prevSelected[name] };
      const department = departments.find((d) => d.name === name);
      if (department) {
        department.subDepartments.forEach((subDept) => {
          newSelected[subDept] = newSelected[name];
        });
      }
      return newSelected;
    });
  };

  const handleSubToggle = (deptName: string, subDeptName: string) => {
    setSelected((prevSelected) => {
      const newSelected = {
        ...prevSelected,
        [subDeptName]: !prevSelected[subDeptName],
      };
      const department = departments.find((d) => d.name === deptName);
      if (department) {
        const allSelected = department.subDepartments.every(
          (subDept) => newSelected[subDept]
        );
        newSelected[deptName] = allSelected;
      }
      return newSelected;
    });
  };

  return (
    <Container sx={{ padding: "100px 0" }} maxWidth="sm">
      <List>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 0 30px 0",
            textShadow:
              "7px 2px 3px rgba(0, 0, 0, 0.2), 5px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Departments
        </Typography>
        {departments.map((department) => (
          <div key={department.name}>
            <ListItem
              onClick={() =>
                setOpen(open === department.name ? null : department.name)
              }
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={!!selected[department.name]}
                  onChange={() => handleToggle(department.name)}
                />
              </ListItemIcon>
              <ListItemText primary={department.name} />
              {open === department.name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open === department.name}>
              <List component="div" disablePadding>
                {department.subDepartments.map((subDept) => (
                  <ListItem key={subDept} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={!!selected[subDept]}
                        tabIndex={-1}
                        disableRipple
                        onChange={() =>
                          handleSubToggle(department.name, subDept)
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default DepartmentList;
