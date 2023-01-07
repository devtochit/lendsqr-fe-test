import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"
import '../CustomTabs/customtabs.scss'

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <ul className="tabs-wrapper">
        <div>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
        </div>
       
      </ul>
      <div className="single_tab">{children[selectedTab]}</div>
    </>
  )
}

export default Tabs