function InputSingup({ type, name, label }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        // placeholder="text"
        name={name}
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
}

export default InputSingup;
