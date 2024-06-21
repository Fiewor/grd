import { useMutationState } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Button,
  Icon,
  Table,
} from "semantic-ui-react";

const Results = () => {
  const nav = useNavigate();
  const data = useMutationState({
    filters: "gradeData",
    select: (mutation) => mutation.state?.data?.data,
  });

  let _gradingResponse = [];

  if (data?.length) {
    const {
      data: { gradingResponse }, // gradingResponse
    } = data[0];

    _gradingResponse = gradingResponse;
  }

  console.log("gradingResponse: ", _gradingResponse);

  const exportToExcel = () => {
    //! TO-DO: implement functionality
    console.log("exporting to excel...");
  };

  return (
    <div className="w-100 h-screen p-8">
      <Table columns={3}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Student ID</TableHeaderCell>
            <TableHeaderCell>Grade</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {_gradingResponse
            ?.map(({ value }) => JSON.parse(value))
            .map(({ score }, id) => (
              <TableRow key={id}>
                <TableCell>{id + 1}</TableCell>
                <TableCell>{score}</TableCell>
                <TableCell>
                  <Button primary onClick={() => nav(`${id}`)}>
                    Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter fullWidth>
          <TableRow>
            <TableHeaderCell colSpan="6">
              <Button
                floated="right"
                labelPosition="left"
                primary
                size="small"
                onClick={exportToExcel}
              >
                <Icon name="user" /> Export to Excel
              </Button>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Results;
