import PropTypes from "prop-types";
// Si robohash, no funciona se puede usar este otro generador de avatares
// function UserAvatar({ identifier, size = 50 }) {
//   const avatarUrl = `https://api.dicebear.com/6.x/bottts/svg?seed=${encodeURIComponent(
//     identifier
//   )}&size=${size}&radius=50`;

//   return (
//     <img
//       src={avatarUrl}
//       alt="Avatar de Usuario"
//       width={size}
//       height={size}
//       style={{ marginRight: "10px" }}
//     />
//   );
// }

// export default UserAvatar;

function UserAvatar({ identifier, size = 50 }) {
  const avatarUrl = `https://robohash.org/${encodeURIComponent(
    identifier
  )}?size=${size}x${size}`;

  return (
    <img
      src={avatarUrl}
      alt="Avatar de Usuario"
      width={size}
      height={size}
      style={{ marginRight: "10px" }}
    />
  );
}

UserAvatar.propTypes = {
  identifier: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default UserAvatar;
