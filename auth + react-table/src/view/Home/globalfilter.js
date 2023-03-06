import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <Box sx={{ margin: "10px auto", width: "fit-content" }}>
      <TextField
        label={`Search ${count} records...`}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} `}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </Box>
  );
}
