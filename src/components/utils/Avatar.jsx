import Avatar from "@mui/material/Avatar";
import img from "../../images/fotomarta.jpeg";

export default function SizeAvatars() {
  return <Avatar alt="photo" src={img} sx={{ width: 290, height: 290 }} />;
}
