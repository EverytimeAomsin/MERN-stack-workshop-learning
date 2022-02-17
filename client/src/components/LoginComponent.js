import NavbarComponent from "./NavbarComponent"

const LoginComponent =()=>{
    return(
        <div className="container p-5">
        <NavbarComponent/>
        <h1>เข้าสู่ระบบ</h1>
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" 
                    value={title} 
                    onChange={inputValue("title")}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" 
                    value={author}
                    onChange={inputValue("author")}
                />
            </div>
            <br/>
            <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary"/>
        </form>
    </div>
    )
}
export default LoginComponent