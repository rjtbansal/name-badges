import { ChangeEventHandler } from 'react';

/**
 * Chart explaining types vs interfaces and when to use what
 * https://fem-react-typescript.vercel.app/Types%20versus%20interfaces.md
 *
 * A good practice: Startout with type definitions in these files and as you need them in multiple places export
 * it out to not clutter namespace too much
 */
type ControlPanelProps = {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
