'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";

import { BsGithub, BsGoogle } from "react-icons/bs"

import { useState, useCallback } from "react"
import { FieldValues, useForm, SubmitHandler, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { IconBaseProps } from "react-icons";

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {

    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(
        () => {
            if (variant == "LOGIN") {
                setVariant("REGISTER")
            } else {
                setVariant("LOGIN")
            }
        },
        [variant],
    );

    // Creating the form from react-hook-form
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // axios code
        }

        if (variant === "LOGIN") {
            // Next-auth Sign In 
        }
    }

    const SocialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth social ignIn
    }





    return (
        <div
            className="
                mt-8 
                sm:mx-auto 
                sm:w-full 
                sm:max-w-md
          "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
              "
            >
                <form
                    action=""
                    className=" space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant == "REGISTER" && (
                        <Input
                            lable={"Name"}
                            id={"name"}
                            required={false}
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        lable={"Email"}
                        id={"email"}
                        type="email"
                        required={false}
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        lable={"Password"}
                        id={"password"}
                        type="password"
                        required={false}
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            type="submit"
                        >

                            {variant === "LOGIN" ? "Sign In" : "Register"}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className=" relative ">
                        <div
                            className=" 
                                absolute 
                                flex 
                                items-center 
                                inset-0
                        ">
                            <div
                                className=" 
                                w-full 
                                border-t 
                                border-gray-300 
                            "
                            />
                        </div>

                        <div
                            className="
                            relative flex justify-center text-sm
                        ">
                            <span className=" bg-white px-3 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className=" mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => SocialAction("github")}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => SocialAction("google")}
                        />
                    </div>
                </div>
                <div
                    className="
                        flex gap-2 
                        justify-center 
                        text-sm 
                        mt-6 
                        px-2 
                        text-gray-500
                    "
                >
                    <div>
                        {variant == "LOGIN" ? "New to Messenger" : "Already have an Account?"}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className=" 
                        underline 
                        cursor-pointer 
                        "
                    >
                        {variant == "LOGIN" ? "Create an Accont" : "Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm