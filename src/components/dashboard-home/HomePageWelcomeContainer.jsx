import PlaceOrderDropdown from "../common/DropdownComponent/PlaceOrderDropdown";

const HomePageWelcomeContainer = ({ profile = {} }) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">
                    Welcome {profile?.full_name || profile?.first_name || 'Admin'}
                </h1>
                <p className="text-muted-foreground mt-1">{"Here's what's happening with your orders today."}</p>
            </div>
            <PlaceOrderDropdown />
        </div>
    )
}

export default HomePageWelcomeContainer;