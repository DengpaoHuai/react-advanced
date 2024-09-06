import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string({
      message: "Password is required",
    })
    .min(6, {
      message: "Trop court.",
    })
    .max(100),
});

type Inputs = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<Inputs> = (values) => {
    const response = {
      id: 1,
      email: values.email,
      nom: "toto",
    };
    console.log(response);
    setUser(response);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
