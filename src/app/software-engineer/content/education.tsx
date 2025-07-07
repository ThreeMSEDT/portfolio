export default function Education() {
  return (
    <div className='w-full h-full flex flex-col flex-wrap gap-4 text-base'>
      <div className="flex flex-col gap-2" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          BSc • Computer Science
        </div>
        <div className="flex gap-2 text-sm" >
          <span>University of Jordan</span>
          |
          <span>2017 - 2021</span>
          |
          <span>GPA: 3.66 / 4</span>
        </div>
        <div>
          Active contributor to programming competitions as participant, problem writer, judge, and trainer.
        </div>
      </div>
      <div className="flex flex-col gap-2" >
        <div className="text-xl sm:text-2xl md:text-3xl" >
          Scientific Specialization
        </div>
        <div className="flex gap-2 text-sm" >
          <span>Salah AlDeen High School</span>
          |
          <span>2015 - 2017</span>
          |
          <span>89.9%</span>
        </div>
        <div>
          Ninth in the batch. Top 1% in my school. Top 10% in my country.
        </div>
      </div>
    </div>
  );
}