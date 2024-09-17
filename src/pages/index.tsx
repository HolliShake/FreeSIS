import { Button, Card, CardBody, CardHeader, Checkbox, Heading, IconButton, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthType } from "@interfaces/auth.type";
import React, { useTransition } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const schema:any = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const LoginPage = () => {
    const [ isPending, startTransition ] = useTransition() as any;
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: "all",
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    
    const onLogin = (data:AuthType) => {
        console.log("Yeah!!")
        startTransition(async () => {
            console.log(data);
        });
    };

    return (
        <div
            className="flex flex-row items-center justify-center w-full h-full bg-blue-400"
        >
            <Card className="flex-auto flex-grow-0 w-fit md:!w-[430px] h-fit break-words whitespace-break-spaces">
                <CardHeader>
                    <Heading size="md">Login</Heading>
                    <Text fontSize="sm">Start managing now</Text>
                </CardHeader>
                <CardBody>
                    <form
                        onSubmit={handleSubmit((data:any) => onLogin(data))}
                    >
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12">
                                <div className="grow-0">
                                    <Input 
                                        type="email"
                                        placeholder="Email"
                                        disabled={isPending}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <small className="text-danger">{errors.email?.message}</small>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="grow-0">
                                    <InputGroup>
                                        <Input 
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            disabled={isPending}
                                            {...register("password")}
                                        />
                                        <InputRightAddon onClick={() => setShowPassword(!showPassword)}>
                                            <Icon icon={showPassword ? "tabler:eye-off" : "tabler:eye"} />
                                        </InputRightAddon>
                                    </InputGroup>
                                    {errors.email && (
                                        <small className="text-danger">{errors.password?.message}</small>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className="flex flex-row align-center gap-2">
                                    <Checkbox className="rounded" />
                                    Remember me
                                </div>
                            </div>
                            <div className="col-span-12">
                                <Button 
                                    className="w-full"
                                    colorScheme="blue"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default LoginPage;