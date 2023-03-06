import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useExpanded,
  usePagination,
  useRowSelect,
} from "react-table";
import { GlobalFilter } from "./globalfilter";

function Home() {
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <Checkbox ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  const data = React.useMemo(
    () => [
      {
        id: "0003",
        name: "patoliya Family",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "0004",
        name: "zeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash family",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
        ExpandedCell: [
          {
            id: "0004",
            name: "zeel patoliya",
            email: "jeelpatoliya@gmail.com",
            password: "jeel@123",
          },
          {
            id: "0004",
            name: "zeel patoliya",
            email: "jeelpatoliya@gmail.com",
            password: "jeel@123",
          },
          {
            id: "0004",
            name: "zeel patoliya",
            email: "jeelpatoliya@gmail.com",
            password: "jeel@123",
          },
        ],
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
        subRows: [
          {
            id: "0123",
            name: "vaibhav patoliya",
            email: "vaibhavpatoliya@gmail.com",
            password: "vaibhav@123",
          },
          {
            id: "0123",
            name: "vaibhav patoliya",
            email: "vaibhavpatoliya@gmail.com",
            password: "vaibhav@123",
          },
          {
            id: "0123",
            name: "vaibhav patoliya",
            email: "vaibhavpatoliya@gmail.com",
            password: "vaibhav@123",
          },
        ],
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "Aaliya patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "Zeel patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
      {
        id: "0123",
        name: "vaibhav patoliya",
        email: "vaibhavpatoliya@gmail.com",
        password: "vaibhav@123",
      },
      {
        id: "6734",
        name: "jeel patoliya",
        email: "jeelpatoliya@gmail.com",
        password: "jeel@123",
      },
      {
        id: "9856",
        name: "pratik patoliya",
        email: "pratikpatoliya@gmail.com",
        password: "pratik@123",
      },
      {
        id: "4567",
        name: "yash patoliya",
        email: "yashpatoliya@gmail.com",
        password: "Yash@123",
      },
    ],
    []
  );
  // create columns
  const columns = React.useMemo(
    () => [
      {
        Header: "User Table",
        columns: [
          {
            // This is the column that contains the expand button
            id: "expander",
            Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
              <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? "👇" : "👉"}
              </span>
            ),
            Cell: ({ row }) =>
              row.canExpand ? (
                <span
                  {...row.getToggleRowExpandedProps({
                    style: {
                      paddingLeft: `${row.depth * 2}rem`,
                    },
                  })}
                >
                  {row.isExpanded ? "👇" : "👉"}
                </span>
              ) : null,
          },
          {
            Header: "Username Or Id",
            columns: [
              {
                Header: "Id",
                accessor: "id", // accessor is the "key" in the data
              },
              {
                Header: "Name",
                accessor: "name",
              },
            ],
          },
          {
            Header: "Information",
            columns: [
              {
                Header: "Email",
                accessor: "email",
              },
              {
                Header: "Password",
                accessor: "password",
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const tableInstantce = useTable(
    { columns, data, initialState: { pageIndex: 2 } },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter, selectedRowIds, expanded },
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    visibleColumns,
  } = tableInstantce;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px blue" }}
        width="100%"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    padding: "10px",
                    border: "solid 1px black",
                    background: "#fce1b5",
                  }}
                >
                  {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? "aaaaaa🛑 " : "aaaaa👊 "}
                    </span>
                  ) : null}
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "papayawhip",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/* Render the expanded row */}
                      {row.cells.map((cell) => cell.render("ExpandedCell"))}
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
      <Box
        className="pagination"
        sx={{ margin: "10px auto", width: "fit-content" }}
      >
        <Button
          variant="contained"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <TextField
            inputProps={{ inputMode: "numeric" }}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <MenuItem key={pageSize} value={pageSize}>
              Show {pageSize}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
}

export default Home;
