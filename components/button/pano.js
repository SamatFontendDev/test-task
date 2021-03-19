import Button from '@/components/button'

const Icon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path
      d="m 6.6404644,8.9373489 5.2002916,0.02826 v 0 M 6.584846,9.8272093 V 7.435654 c 1.7956564,0.4473269 3.562145,0.5156508 5.28372,0 v 2.4193813 z m 7.798367,-4.5900965 v 3.3183204 0 M 13.164047,5.7559645 v 2.5956282 l 2.556316,0.5112702 V 4.7334147 Z M 2.3095375,10.789949 V 5.6772813 L 4.7478698,5.4018225 V 10.239172 Z M -0.12879481,1.9017861 c 6.12204881,2.6529332 12.24409581,3.1076531 18.36614581,0 V 11.89112 c -6.12205,-2.9381384 -12.244097,-2.5082334 -18.36614581,0 z"
      stroke="currentColor"
    />
    <path
      d="m 5.9670363,14.801385 1.1422027,1.06751 -1.4568264,0.839892 v 0 M 7.109239,15.868895 C 6.2152603,15.771427 4.4269846,15.551528 3.750873,15.377306 2.3986493,15.028391 1.5622891,14.546785 1.5623069,14.014654 c -3.57e-5,-1.06431 3.3454414,-1.927086 7.4723088,-1.927086 4.1268653,0 7.4723423,0.862776 7.4723073,1.927086 v 1.41e-4 c 3.5e-5,1.064308 -3.345442,1.927085 -7.4723073,1.927085 -0.5158572,0 0.2406338,0.0048 0,0"
      stroke="currentColor"
    />
  </svg>
)

const Panorama = props => {
  return (
    <Button inline smallText leftIcon={<Icon />} {...props}>
      СМОТРЕТЬ ПАНОРАМУ
    </Button>
  )
}

export default Panorama