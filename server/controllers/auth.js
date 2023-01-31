const {connect} =require("getstream");
const bcrypt=require("bcrypt");
const streamChat=require("stream-chat");
const crypto=require("crypto");

api_key=process.env.STREAM_API_KEY;
api_secret=process.env.STREAM_API_SECRET;
app_id=process.env.STREAM_APP_ID;
const signup = async(req, res) => {
    try {
        const {
            fullname,
            username,
            phonenum,
            avatarurl,
            password,

        } = req.body;

        const userId=crypto.randomBytes(16).toString("hex");

        const serverClient=connect(api_key,api_secret,app_id);

        const hashPassword=await bcrypt.hash(password);

        const token=serverClient.createUserToken(userId);

        res.status(200).json({
            fullname,
            username,
            phonenum,
            avatarurl,
            hashPassword,
        });

    } catch (error) {
        res.status(500).json({ message: error })
    }
};

const login =async (req, res) => {
    try {
        const {
            username,
            password,

        } = req.body;

        const serverClient=connect(api_key,api_secret,app_id);

        const client=StreamChat.getInstance(api_key,api_secret);

        const {users}=await client.quaryUsers({name: username});

        if(!users.length) return res.status(400).json({
            message:"the user not found"
        })
        const success=await bcrypt.compare(password,users[0].hashPassword);

        const token=serverClient.createUserToken(users[0].id);

        if(success){
            res.status(200).json({token,
                fullname:users[0].fullname,
                username:users[0].id
            });
        }else{
            res.status(500).json({
                message:"Incorrect password"
            });
        }

    } catch (error) {
        res.status(500).json({ message: error })
    }
};

module.exports = { signup, login };