export default ({ square }) => (
  <div className="square">
    {square} м
    <small>
      <sup>2</sup>
    </small>
    <style jsx>{`
      .square {
        font-size: 36px;
        font-weight: 500;
        position: relative;
        margin-bottom: 30px;
        color: #A6CE38;
        :global(.is-mobile) {
        }
      }
    `}</style>
  </div>
)
