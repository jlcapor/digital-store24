import {
  Home,
  LucideIcon,
  Store,
  MapPinned, 
  FileSliders, 
  Layers3,
  SquareStack,
  PackageSearch
} from "lucide-react"

export type Icon = LucideIcon;

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg 
    {...props}
     width="20" 
     height="20" 
     viewBox="0 0 15 15" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z" 
        fill="currentColor"
      >
      </path>
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g className="animated-spinner">
      <rect x="11" y="1" width="2" height="5" opacity=".14" />
      <rect
        x="11"
        y="1"
        width="2"
        height="5"
        transform="rotate(30 12 12)"
        opacity=".29"
      />
      <rect
        x="11"
        y="1"
        width="2"
        height="5"
        transform="rotate(60 12 12)"
        opacity=".43"
      />
      <rect
        x="11"
        y="1"
        width="2"
        height="5"
        transform="rotate(90 12 12)"
        opacity=".57"
      />
      <rect
        x="11"
        y="1"
        width="2"
        height="5"
        transform="rotate(120 12 12)"
        opacity=".71"
      />
      <rect
        x="11"
        y="1"
        width="2"
        height="5"
        transform="rotate(150 12 12)"
        opacity=".86"
      />
      <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
    </g>
  </svg>
  ),
  google: ({ ...props }: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  chevronLeft: (props: IconProps) =>(
    <svg {...props} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
      </path>
    </svg>
  ),
  home: Home,
  store: Store,
  contact: MapPinned,
  blog: FileSliders,
  category: Layers3,
  subacategory: SquareStack,
  product: PackageSearch
}
