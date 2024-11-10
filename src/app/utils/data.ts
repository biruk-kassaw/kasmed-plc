import { Machine } from "./machine";
import img1 from "../public/images/gallery/products-hemodialysis-machine.png"
import img2 from "../public/images/products/dialyzer.jpg"
import img3 from "../public/images/products/powder.png"
import img4 from "../public/images/products/water.png"
import img5 from "../public/images/products/flud-filter.png"
const machines: Machine[] = [
    {
        id: 1,
        name: "Hemodialysis Machine",
        image: img1,
        description: [
            "15-inches glass touch screen, corrosion resistance glass with sensitive touch",
            "Large accessory tray to place the accessories", 
            "180° angle rotation to satisfy different angles of demand",
            "360° sound light alarm will be noticed no matter on which angle",
            "High capacity battery can continuously operate up to 30mil",
            "Support NIBP and SpO2 monitoring",
            "Patient IC card and data management system",
            "Combined with DF210 to implement ultra pure dialysis",
            "Producing substitution fluid through double-stage dialysis fluid filters during Online-HDF treatment",
            "Support Bi-cartridge and Central dialysis fluid delivery system",
            ]
    },
    {
        id: 2,
        name: "Dialyzer",
        image: img2,
        description: [
            "Stable micro wave membrane production technology",
            "Advanced end-face cutting and inspection technology",
            "High sieving coefficient of Beta-2-microglobulin (β2-MG)",
            "High quality sponge structure membrane",
            "Optimization of membrane material selection - PES",
            "Efficient UF coefficient and phosphate clearance capacity"            
            ]
    },
    {
        id: 3,
        name: "Dialysis Powder",
        image: img3,
        description: [
            "Main content: Sodium Bicarbonate (NaHCO3)",
            "Weight: 650G",
            "Cartridge housing material: PP",
            "Fine outer wrapping guarantees the safety while transportation to protect the products"
            ]
    },
    {
        id: 4,
        name: "RO Water Equipment",
        image: img4,
        description: [
            "Unique water conservation technology can avoid static waste water microbial reproduction",
            "Unique design of three-way downstream and large curved elbow",
            "German SIEMENS PLC main control module, multi-lingual interface",
            "Temperature compensation technique",
            "Heat disinfection designed as a module for easily upgrading the old unit",
            "Variety way of water saving, high water utilization rate and water recycling rate over 70%"
            ]
    },
    {
        id: 5,
        name: "Fluid Filter DF210",
        image: img5,
        description: [
            "Membrane material: Polyether sulfone (PES)",
            "Effective surface area 2.1 m²",
            "Bacteria content after filtration ≤0.1 CFU/mL",
            "Endotoxin content after filtration ≤0.03 EU/mL",
            "Maximum TMP: 600 mmHg",
            "Connector type: Hansen",
            "160 sessions of dialysis treatment or continuous use for 900 hours",
            "Strong tolerance to disinfectant, such as citric acid, per-acetic acid, and sodium hypochlorite (once per week)",
            "Sterilization: EB (Electron Beam)"    
        ]
    }
]
export default machines