type Props = {
  label: string;
  selected: string[];
  setSelected: (val:string[]) => void;
  translate: (term: string) => string;
};

export default function AppliedFiltersSingleEntity({
  label,
  selected,
  setSelected,
  translate,
}: Props) {
  return (
    <>
      {selected.length > 0 && (
        <div className="flex flex-row flex-wrap items-center gap-1 mb-2">
          <h5 key="label" className="uppercase mr-2">
            {label}:
          </h5>
          {selected.map((s) => (
            <span
              key={s}
              onClick={() => {
                const restOfSelected = selected.filter(str => str != s);
                setSelected(restOfSelected);
              }}
              className={
                "flex flex-row items-center justify-between gap-1 leading-5 cursor-pointer px-3 py-1" +
                " rounded-[20px] bg-primary-light "
              }
            >
              {translate(s)}
              <img src="/img/x.png" className="h-4"/>
            </span>
          ))}
        </div>
      )}
    </>
  );
}
