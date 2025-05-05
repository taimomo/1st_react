function Greeting({ name, children }) {
    return (
        <div className="p-4 border rounded">
            <h2>Hello, {name}!</h2>
            <p>{children}</p>
        </div>
    );
}

export default Greeting;