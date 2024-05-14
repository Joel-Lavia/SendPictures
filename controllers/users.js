const prisma = require("../db/prisma");

const PostUsers = async (req, res) => {
const { name } = req.body;
try {
const existingUser = await prisma.user.findUnique({
where: {
name:name
}
});

if (existingUser) {
return res.status(400).json(`User with this name ${name} already exists`);
}

const newUser = await prisma.user.create({
data: {
    name
}
});
res.json({ success: true, user: newUser });
} catch (error) {
res.status(500).json(error);
}
}

module.exports = {
PostUsers
}