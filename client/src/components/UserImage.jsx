import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
return (
    <Box width={size} height={size}>
    <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={image === null ? "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" :`http://localhost:3001/assets/${image}`}
    />
    </Box>
);
};

export default UserImage;