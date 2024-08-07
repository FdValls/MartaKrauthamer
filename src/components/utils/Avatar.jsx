import Avatar from "@mui/material/Avatar";
// import img from "../../images/fotomarta.jpeg";
import img from "../../images/fotomartaV2.png";

export default function SizeAvatars() {
  return <Avatar alt="photo" src={img} sx={{ width: 290, height: 290 }} />;
}
