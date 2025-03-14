import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function MenuSection() {
  return (
    <div className="bg-neutral-900 font-serif text-white p-20">

      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-between items-center">
          <MoveLeft />
          <p className="text-xl">FOOD MENU </p>
          <MoveRight />
        </div>
        <p className="text-5xl font-semibold">Discover Our Menu</p>
      </div>

      <div className="grid grid-cols-3 gap-10 p-16">
        <div className="bg-neutral-800">
          <img src="https://images.unsplash.com/photo-1576757565432-550748d37e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxmb29kc3xlbnwwfHwwfHx8MA%3D%3D" className="h-56 border rounded-full" alt="breakfast" />
          <p>BreakFast</p>
          <p>Breakfast casserole</p>
          <p>Reek yogurt</p>
          <p>Cottage cheese</p>
          <button>Make Order</button>
        </div>
        <div>
          single menu
        </div>
        <div>
          single menu
        </div>
      </div>

    </div>
  );
}
