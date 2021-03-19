import dateformat from 'dateformat'
import dayjs from '@/dayjs'
import { parseDate } from '@/helpers'

const Item = props => {
  const humanDate = dateformat(
    new Date(...parseDate(props.published_at)),
    'd.mm.yyyy'
  )
  return (
    <div
      onClick={() => props.onClick(props)}
      key={props.id}
      className="news flex"
    >
      <div className="flex-none">
        <img src={props.picture_url} width="212" height="212" />
      </div>
      <div className="news-body flex flex-auto flex-column">
        <div className="date">{humanDate}</div>
        <div className="name">{props.name}</div>
        <div className="notice">{props.annotation}</div>
        <div className="law-text">
          <small>{props.law_text}</small>
        </div>
      </div>
      <style jsx>{`
        .news {
          height: 100%;
          cursor: pointer;
          box-sizing: border-box;
          background: #F9F9F9;
        }
        .date {
          font-weight: 400;
          font-size: 14px;
          color: #00A9A4;
        }
        .name {
          margin-top: 14px;
          margin-bottom: 7px;
          font-weight: 500;
          font-size: 20px;
          line-height: 130%;
          text-transform: uppercase;
        }
        .notice {
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          color: #4E4B4B;
        }
        img {
          display: block;
          object-fit: cover;
        }
        .news-body {
          padding: 26px 29px 26px 40px;
        }
      `}</style>
    </div>
  )
}

export default Item
