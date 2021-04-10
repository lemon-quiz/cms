import {
  Box,
  Container,
  FormControl, Input,
  InputLabel,
  TextField, Typography,
} from '@material-ui/core';

export default function Yucan() {
  return (
    <Container>
      <Box style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row">
          <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">Page Title</Box>
          <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Page
                title
              </InputLabel>
              <Input
                id="standard-adornment-amount"
              />
            </FormControl>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row">
          <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">Menu title</Box>
          <Box flexGrow={12} p={1} m={1} bgcolor="grey.300">
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Menu
                title
              </InputLabel>
              <Input
                id="standard-adornment-amount"
              />
            </FormControl>
          </Box>
          <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
            ICONSSS

          </Box>
        </Box>

        {/* Start Complex */}
        <div>
          <Box bgcolor="grey.300" m={1}>
            <Typography variant="h1">Complex</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box flexGrow={1} />
            <Box flexGrow={19}>

              <Box display="flex" flexDirection="row">
                <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
                  Menu
                  title
                </Box>
                <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Menu
                      title
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                    />
                  </FormControl>
                </Box>
              </Box>

              <Box display="flex" flexDirection="row">
                <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
                  Menu
                  title
                </Box>
                <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Menu
                      title
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                    />
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
        <div>
          <Box bgcolor="grey.300" m={1}>
            <Typography variant="h1">Complex</Typography>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box flexGrow={1} />
            <Box flexGrow={19}>

              <Box display="flex" flexDirection="row">
                <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
                  Menu
                  title
                </Box>
                <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
                  <FormControl fullWidth>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Menu
                      title
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                    />
                  </FormControl>
                </Box>
              </Box>

              <div>
                <Box bgcolor="grey.300" m={1}>
                  <Typography variant="h1">Complex</Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Box flexGrow={1} />
                  <Box flexGrow={19}>

                    <Box display="flex" flexDirection="row">
                      <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
                        Menu
                        title
                      </Box>
                      <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="standard-adornment-amount">
                            Menu
                            title
                          </InputLabel>
                          <Input
                            id="standard-adornment-amount"
                          />
                        </FormControl>
                      </Box>
                    </Box>

                    <Box display="flex" flexDirection="row">
                      <Box flexGrow={4} p={1} m={1} bgcolor="grey.300">
                        Menu
                        title
                      </Box>
                      <Box flexGrow={16} p={1} m={1} bgcolor="grey.300">
                        <FormControl fullWidth>
                          <InputLabel htmlFor="standard-adornment-amount">
                            Menu
                            title
                          </InputLabel>
                          <Input
                            id="standard-adornment-amount"
                          />
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Box>
          </Box>
        </div>
        {/* End Complex */}
      </Box>
    </Container>
  );
}
