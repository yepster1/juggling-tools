import { Box, Button, Grid, Input, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { convertStringToSync } from "../../tools/siteSwap";
import Container from "./styles";

//react functional component with props
const Asymetric = ({ ...props }: {}) => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState(["", ""]);

  const setCaller = useCallback(() => {
    if (input.length % 2 === 0) {
      const result = convertStringToSync(input);
      setOutput([result[0], result[1]]);
    }
  }, [input, setOutput]);

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={8}>
            <Typography
              color="primary"
              variant="button"
              component="h3"
              align="center"
              gutterBottom={true}
            >
              symmetric to asymmetric converter
            </Typography>
            <Typography variant="h4" component="h2" align="center">
              starting siteswap
            </Typography>
            <Input
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></Input>
            <Button onClick={setCaller}>convert</Button>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <Typography variant="h5" component="h3">
                  Left Shift: {output[0]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <Typography variant="h5" component="h3">
                  Right Shift: {output[1]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Asymetric;
