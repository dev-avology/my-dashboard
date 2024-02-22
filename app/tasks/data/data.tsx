import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]
export const statuses = [
  {
    value: "queue",
    label: "Queued",
    icon: QuestionMarkCircledIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
    
  },
  {
    value: "paused",
    label: "Pause",
    icon: CircleIcon,
    bg:"bg-gray-100",
    color:"text-gray-800"
  },
  {
    value: "inprogress",
    label: "In Progress",
    icon: StopwatchIcon,
    bg:"bg-blue-100",
    color:"text-blue-800"
    
  },
  {
    value: "readyforreview",
    label: "Ready for Review",
    icon: StopwatchIcon,
    bg:"bg-red-100",
    color:"text-red-800"
  },
  {
    value: "completed",
    label: "Completed",
    icon: CheckCircledIcon,
    bg:"bg-green-100 ",
    color:"text-green-800"
    
  },
  {
    value: "closed",
    label: "Closed",
    icon: CrossCircledIcon,
    bg:"bg-purple-100",
    color:"text-purple-800"
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
    bg:"bg-green-100 ",
    color:"text-green-800"
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
    bg:"bg-yellow-100",
    color:"text-yellow-800"
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
    bg:"bg-red-100",
    color:"text-red-800"
  },
]
