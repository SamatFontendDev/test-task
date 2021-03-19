export default ({ children }) => (
  <div className="label">
    {children}
    <style jsx>{`
      .label {
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
        color: #4E4B4B;
        text-transform: uppercase;
      }
    `}</style>
  </div>
)
