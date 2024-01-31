const Calendar = () => {
  return (
    <div className="m-24">
      {/* calendar with tailwind */}
      <div className="grid grid-cols-7 grid-rows-7 calendar aspect-square">
        <div className="col-span-7 row-span-1 text-center bg-base-200 calendar-row grid grid-cols-7 rounded-lg items-center">
          {/* weekdays */}
          <div className="col-span-1 text-error">S</div>
          <div className="col-span-1">M</div>
          <div className="col-span-1">T</div>
          <div className="col-span-1">W</div>
          <div className="col-span-1">T</div>
          <div className="col-span-1">F</div>
          <div className="col-span-1">S</div>
        </div>
        <div className="col-span-7 row-span-1 text-center bg-base-100 calendar-row grid grid-cols-7 items-center">
          <div className="col-span-1 text-error"></div>
          <div className="col-span-1">1</div>
          <div className="col-span-1">2</div>
          <div className="col-span-1">3</div>
          <div className="col-span-1">4</div>
          <div className="col-span-1">5</div>
          <div className="col-span-1">6</div>
        </div>
        <div className="col-span-7 row-span-1 text-center bg-base-100 calendar-row grid grid-cols-7 items-center">
          <div className="col-span-1 text-error">7</div>
          <div className="col-span-1">8</div>
          <div className="col-span-1">9</div>
          <div className="col-span-1">10</div>
          <div className="col-span-1">11</div>
          <div className="col-span-1">12</div>
          <div className="col-span-1">13</div>
        </div>
        <div className="col-span-7 row-span-1 text-center bg-base-100 calendar-row grid grid-cols-7 items-center">
          <div className="col-span-1 text-error">14</div>
          <div className="col-span-1">15</div>
          <div className="col-span-1">16</div>
          <div className="col-span-1">17</div>
          <div className="col-span-1">18</div>
          <div className="col-span-1">19</div>
          <div className="col-span-1">20</div>
        </div>
        <div className="col-span-7 row-span-1 text-center bg-base-100 calendar-row grid grid-cols-7 items-center">
          <div className="col-span-1 text-error">21</div>
          <div className="col-span-1 text-primary">22</div>
          <div className="col-span-1">23</div>
          <div className="col-span-1">24</div>
          <div className="col-span-1">25</div>
          <div className="col-span-1">26</div>
          <div className="col-span-1">27</div>
        </div>
        <div className="col-span-7 row-span-1 text-center bg-base-100 calendar-row grid grid-cols-7 items-center">
          <div className="col-span-1 text-error">28</div>
          <div className="col-span-1">29</div>
          <div className="col-span-1">30</div>
          <div className="col-span-1">31</div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
