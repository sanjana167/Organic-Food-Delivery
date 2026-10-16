import userDataSchema from "../model/userSchema.js";
import bcrypt from "bcrypt"

export const signUp = async (req, res) => {
    try {
        const findEmail = await userDataSchema.findOne({ email: req.body.email })
        console.log(findEmail, "hjddnbc")
        if (findEmail !== null) {
            return res.json({
                success: false,
                status: 400,
                message: "Email already exist",
                body: {}
            })
        } else {
            const encPass = await bcrypt.hash(req.body.password, 10)
            const data = await userDataSchema.create({ ...req.body, password: encPass })
            console.log(data, "glglg")

            return res.json({
                success: true,
                status: 200,
                message: "user created succcessfully",
                body: data,

            })

        }

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {}
        })
    }

}

export const login = async (req, res) => {

    try {

        const data = await userDataSchema.findOne({
            email: req.body.email
        })

        console.log(req.body.email, "req.body.email")

        if (!req.body.email) {

            return res.json({
                success: false,
                status: 400,
                message: "Email is required",
                body: {}
            })

        } else if (!req.body.password) {

            return res.json({
                success: false,
                status: 400,
                message: "Password is required",
                body: {}
            })

        } else {

            if (data == null) {

                return res.json({
                    success: false,
                    status: 400,
                    message: "Email is not valid",
                    body: {}
                })

            } else {

                const decPass = await bcrypt.compare(
                    req.body.password,
                    data.password
                )

                console.log(decPass, "decPass")

                if (decPass == false) {

                    return res.json({
                        success: false,
                        status: 400,
                        message: "Password is not match",
                        body: {}
                    })

                } else {

                    return res.json({
                        success: true,
                        status: 200,
                        message: "User login successfully",
                        body: data
                    })
                }
            }
        }

    } catch (error) {

        console.log(error)

        return res.json({
            success: false,
            status: 500,
            message: "Error",
            body: {}
        });
    }
};

export const findUsers = async (req, res) => {
    try {
        const data = await userDataSchema.find();
        console.log(data, "All users here");
        return res.json({
            success: true,
            status: 200,
            message: "All users are here",
            body: data,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            status: 400,
            message: error,
            body: {},
        });
    }
};
export const findUserByIdByBody = async (req, res) => {
    try{
    const data = await userDataSchema.findById(req.body.id);
    console.log(data, "SingleUser");
    return res.json({
        success: true,
        status: 200,
        message: "This is a single user",
        body: data,
    });
}
  catch (error) {
    console.log(error);
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {},
    });
}
};
export const findUserByIdByParams = async (req, res) => {
    try{
    const data = await userDataSchema.findById({_id: req.params.id});
    console.log(data, "user by params");
    return res.json({
        success: true,
        status: 200,
        message: "This is a single user",
        body: data,
    });
}
  catch (error) {
    console.log(error);
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {},
    });
}
};
export const deleteUser = async (req, res) => {
    try{
    const data = await userDataSchema.findByIdAndDelete({_id: req.params.id});
    const count = await userDataSchema.countDocuments();
    console.log(data, "user deleted");
    return res.json({
        success: true,
        status: 200,
        message: "user deleted successfully",
        body: count,
    });
}
  catch (error) {
    console.log(error);
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {},
    });
}
};

export const userUpdate = async (req, res) => {
    try{
   const encPass = await bcrypt.hash(req.body.password,10);
   const data = await userDataSchema.findByIdAndUpdate(
    {_id: req.body.id},
    {...req.body,password: encPass},
    {new:true},
   );
   console.log(data,"updated user");
    return res.json({
        success: true,
        status: 200,
        message: " user updated successfully",
        body: data,
    });
}
  catch (error) {
    console.log(error);
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {},
    });
}
};
