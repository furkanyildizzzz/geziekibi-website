import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function PopupSignin({
  isLogin,
  handleLogin,
  isRegister,
  handleRegister,
}: any) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, SetEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");

  async function signin({ email, password }: any) {
    // whatever your type
    const callbackUrl = searchParams.get("callbackUrl");
    signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then((res: SignInResponse | undefined) => {
      if (!res) {
        alert("No response!");
        return;
      }

      if (!res.ok) alert("Something went wrong!");
      else if (res.error) {
        console.log(res.error);

        if (res.error == "CallbackRouteError")
          alert("Could not login! Please check your credentials.");
        else alert(`Internal Server Error: ${res.error}`);
      } else {
        if (callbackUrl) router.push(callbackUrl);
        else router.push("/");
      }
    });
  }

  const handleSignIn = () => {
    signin({ email, password });
  };

  return (
    <>
      <div
        className="popup-signin"
        style={{ display: `${isLogin ? "block" : "none"}` }}
      >
        <div className="popup-container">
          <div className="popup-content">
            {" "}
            <a className="close-popup-signin" onClick={handleLogin} />
            <div className="d-flex gap-2 align-items-center">
              <Link href="#">
                <img src="/assets/imgs/logo-80.png" alt="Geziekibi" />
              </Link>
              <h4 className="neutral-1000">Merhaba !</h4>
            </div>
            <div className="box-button-logins">
              {" "}
              <Link className="btn btn-login btn-google mr-10" href="#">
                <img
                  src="/assets/imgs/template/popup/google.svg"
                  alt="Geziekibi"
                />
                <span className="text-sm-bold">Google ile Griş Yap</span>
              </Link>
              <Link className="btn btn-login mr-10" href="#">
                <img
                  src="/assets/imgs/template/popup/facebook.svg"
                  alt="Geziekibi"
                />
              </Link>
              <Link className="btn btn-login" href="#">
                <img
                  src="/assets/imgs/template/popup/apple.svg"
                  alt="Geziekibi"
                />
              </Link>
            </div>
            <div className="form-login">
              <form action="#">
                <div className="form-group">
                  <label className="text-sm-medium">Email</label>
                  <input
                    className="form-control username"
                    type="text"
                    placeholder="e-Posta"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-sm-medium">Şifre</label>
                  <input
                    className="form-control password"
                    type="password"
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="box-remember-forgot">
                    <div className="remeber-me">
                      <label className="text-xs-medium neutral-500">
                        <input className="cb-remember" type="checkbox" />
                        Beni hatırla
                      </label>
                    </div>
                    <div className="forgotpass">
                      {" "}
                      <Link className="text-xs-medium neutral-500" href="#">
                        Şifremi Unuttum!
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-45 mb-30">
                  <Link
                    className="btn btn-black-lg"
                    href="#"
                    onClick={handleSignIn}
                  >
                    Giriş
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15L15 8L8 1M15 8L1 8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <p className="text-sm-medium neutral-500">
                  Üye değil misiniz ?
                  <a
                    className="neutral-1000 btn-signup"
                    onClick={() => {
                      handleRegister();
                      handleLogin();
                    }}
                  >
                    {" "}
                    Buradan Üye Ol!
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
