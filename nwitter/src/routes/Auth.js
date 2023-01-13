import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    // onChange function 
    const onChange = (event) => {
        // 간단하게 form을 컨트롤 할 수 있는 방법 
        const {
            target: { name, value },
        } = event;
        if ( name === "email" ) {
            setEmail(value);
        }else if (name === "password") {
            setPassword(value);
        }
    };
    // onSubmit _ form 제출에 대해서 preventDefault를 하도록 하기
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email, password
                );
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log in"} />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};



export default Auth;