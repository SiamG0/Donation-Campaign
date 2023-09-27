
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";


export default function Statistics() {
    const [percentageOfDonation, setPercentageOfDonation] = useState(0)

    useEffect(() => {
        const dan = JSON.parse(localStorage.getItem('donation'))
        if (dan) {
            const numberOfDonations = dan.length
            const allTheDonations = 12
            const calculateThePercent = (numberOfDonations / allTheDonations) * 100
            setPercentageOfDonation(calculateThePercent)
        }
    }, [])
    const data = [
        { name: "Group A", value: 100 - percentageOfDonation },
        { name: "Group B", value: percentageOfDonation },

    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,

    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div className="md:flex md:flex-col md:justify-center lg:h-[50vh] md:items-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className="md:flex gap-8">
                <div className="flex items-center gap-4">
                    <h1 >Your Donation:</h1>
                    <div className="bg-[#00C49F] w-32 h-2"></div>
                </div>
                <div className="flex items-center gap-4">
                    <h1 >Total Donation:</h1>
                    <div className="bg-[#FF444A] w-32 h-2"></div>
                </div>

            </div>
        </div>


    );
}
