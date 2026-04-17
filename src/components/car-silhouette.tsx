"use client";

interface CarSilhouetteProps {
  selectedZones: string[];
  onToggleZone: (id: string) => void;
  filmColor?: string;
}

export default function CarSilhouette({ selectedZones, onToggleZone, filmColor = "rgba(201,168,76,0.35)" }: CarSilhouetteProps) {
  const zones: { id: string; path: string; label: string }[] = [
    { id: "bonnet", path: "M 200,80 L 300,80 L 310,130 L 190,130 Z", label: "Bonnet" },
    { id: "front-bumper", path: "M 185,130 L 315,130 L 320,160 L 180,160 Z", label: "Front Bumper" },
    { id: "headlights", path: "M 180,115 L 195,115 L 195,140 L 180,140 Z M 305,115 L 320,115 L 320,140 L 305,140 Z", label: "Headlights" },
    { id: "left-wing", path: "M 160,90 L 195,80 L 190,135 L 155,135 Z", label: "L Wing" },
    { id: "right-wing", path: "M 305,80 L 340,90 L 345,135 L 310,135 Z", label: "R Wing" },
    { id: "roof", path: "M 210,190 L 290,190 L 285,240 L 215,240 Z", label: "Roof" },
    { id: "left-door-front", path: "M 155,145 L 195,145 L 195,230 L 155,225 Z", label: "L Front Door" },
    { id: "right-door-front", path: "M 305,145 L 345,145 L 345,225 L 305,230 Z", label: "R Front Door" },
    { id: "left-door-rear", path: "M 155,230 L 195,235 L 195,310 L 160,305 Z", label: "L Rear Door" },
    { id: "right-door-rear", path: "M 305,235 L 345,230 L 340,305 L 305,310 Z", label: "R Rear Door" },
    { id: "left-sill", path: "M 148,145 L 155,145 L 160,310 L 148,305 Z", label: "L Sill" },
    { id: "right-sill", path: "M 345,145 L 352,145 L 352,305 L 340,310 Z", label: "R Sill" },
    { id: "boot", path: "M 195,330 L 305,330 L 310,370 L 190,370 Z", label: "Boot" },
    { id: "rear-bumper", path: "M 185,370 L 315,370 L 320,400 L 180,400 Z", label: "Rear Bumper" },
    { id: "mirrors", path: "M 140,155 L 155,150 L 155,170 L 140,170 Z M 345,150 L 360,155 L 360,170 L 345,170 Z", label: "Mirrors" },
    { id: "a-pillars", path: "M 195,160 L 210,160 L 210,195 L 195,195 Z M 290,160 L 305,160 L 305,195 L 290,195 Z", label: "A-Pillars" },
  ];

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-white/5 p-4">
      <p className="text-xs text-muted-foreground text-center mb-3">Click panels to toggle protection</p>
      <svg viewBox="130 60 240 360" className="w-full max-w-[280px] mx-auto">
        {/* Car body outline */}
        <path
          d="M 200,75 C 200,70 300,70 300,75 L 340,90 L 350,145 L 355,310 L 340,340 L 310,370 L 315,405 L 185,405 L 190,370 L 160,340 L 145,310 L 150,145 L 160,90 Z"
          fill="#1C1C1C"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Clickable zones */}
        {zones.map((zone) => {
          const isSelected = selectedZones.includes(zone.id);
          return (
            <path
              key={zone.id}
              d={zone.path}
              fill={isSelected ? filmColor : "transparent"}
              stroke={isSelected ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.08)"}
              strokeWidth="0.5"
              className="cursor-pointer transition-all duration-200 hover:fill-[rgba(201,168,76,0.15)]"
              onClick={() => onToggleZone(zone.id)}
            >
              <title>{zone.label}</title>
            </path>
          );
        })}
        {/* Windshield */}
        <path
          d="M 210,160 L 290,160 L 285,190 L 215,190 Z"
          fill="rgba(100,150,200,0.15)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
        {/* Rear window */}
        <path
          d="M 215,245 L 285,245 L 290,310 L 210,310 Z"
          fill="rgba(100,150,200,0.15)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
