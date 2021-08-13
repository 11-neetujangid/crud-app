const Logout = () => {

    localStorage.removeItem('token');
    return (
        <h2>Logout</h2>
    )
}
export default Logout;