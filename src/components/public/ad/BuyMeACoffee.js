import { memo } from "react";
import "./BuyMeACoffee.css";

const BuyMeACoffee = () => {
    return (<div className="BuyMeACoffee">
        <a href="https://www.buymeacoffee.com/lht1324" target="_blank">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=lht1324&button_colour=2F6FF8&font_colour=FFFFFF&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
        </a>
    </div>)
}

export default memo(BuyMeACoffee);