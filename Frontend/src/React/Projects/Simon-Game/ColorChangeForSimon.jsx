    import React from 'react'

    function ColorChangeForSimon({color , isActive}) {
        function getColor(color) {
        switch (color) {
            case "red":
                return "bg-red-400";
            case "blue":
                return "bg-blue-400";
            case "green":
                return "bg-green-400";
            case "yellow":
                return "bg-yellow-400";
            default:
                return "";
        }
    }
    return (<div className={`h-40 w-40 rounded-2xl border-2 transition-all duration-100 flex items-center justify-center text-2xl ${getColor(color)} ${isActive ? "brightness-150 scale-95" : "brightness-60"}`}>
        {color}
    </div>
    )
    }

    export default ColorChangeForSimon