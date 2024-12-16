const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1 className="text-2xl">Dashboard</h1>
            {children}
        </div>
    )
}
export default Layout