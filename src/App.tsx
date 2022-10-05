import * as C from './App.styles'
import { useEffect, useState } from 'react'
import Switch from "react-switch";

import { filterListByMonth, getCurrentyMonth } from './helpers/dateFilter'

import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { TableArea } from './components/tableArea'
import { InforArea } from './components/infoArea'
import { InputArea } from './components/inputArea'

function App() {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentyMonth, setCurrentyMonth] = useState(getCurrentyMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [stateSwitch, setStateSwitch] = useState(false)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentyMonth))
  }, [list, currentyMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filteredList])



  const handleMonthChange = (newMonth: string) => {
    setCurrentyMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  const handleChangeTheme = () => setStateSwitch(!stateSwitch)

  return (
    <>
      <C.Container colorTheme={stateSwitch}>

        <C.Header colorTheme={stateSwitch}>
          <C.HeaderText colorTheme={stateSwitch}>Sistema Financeiro</C.HeaderText>
          <C.Box colorTheme={stateSwitch}>
            <span>Ligh</span>
            <Switch
              onChange={handleChangeTheme}
              checked={stateSwitch}
              offColor='#000'
              onColor='#FFF'
              offHandleColor='#FFF'
              onHandleColor='#000'
              uncheckedIcon

            />
            <span>Dark</span>
          </C.Box>
        </C.Header>
        <C.Body>
          {/* Area de Informações */}
          <InforArea
            currentyMonth={currentyMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
            colorTheme={stateSwitch}
          />
          {/* Area para inserir informações */}
          <InputArea onAdd={handleAddItem} />
          {/* Tabela de Itens */}
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  )
}

export default App
