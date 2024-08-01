import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  return (
    <Root>
      <Divider>
        <Chip label="&#9679; &#9679; &#9679;" size="small" />
      </Divider>
      <br />
      <br />
    </Root>
  );
}
