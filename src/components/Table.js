import React from "react"

const Table = () => {
  return (
    <div className="p-table__container">
      <div className="p-table__title">
        <a href="http://www.thefa.com/" className="p-table__title--image">
          <img
            src="//cdn.thefa.com/thefawebsite/assets/images/the-fa-logo.svg"
            title="TheFA.com"
            alt="TheFA.com logo"
            width="82"
            height="20"
          />
        </a>
        <a
          href="http://fulltime-league.thefa.com/Index.do?divisionseason=546571348&league=2113065"
          className="p-table__title--text p-link"
        >
          Division 2
        </a>
      </div>
      <summary className="u-hide">
        This table charts the Essex Sunday Football Combination - Division 2
        teams
      </summary>
      <table>
        <thead>
          <tr>
            <th>
              <span className="large-screen">Position</span>
              <span className="small-screen">Pos</span>
            </th>
            <th className="p-table__club">Club</th>
            <th>
              <span className="large-screen">Played</span>
              <span className="small-screen">Pl</span>
            </th>
            <th>
              <span className="large-screen">Won</span>
              <span className="small-screen">W</span>
            </th>
            <th>
              <span className="large-screen">Drawn</span>
              <span className="small-screen">D</span>
            </th>
            <th>
              <span className="large-screen">Lost</span>
              <span className="small-screen">L</span>
            </th>
            <th>GD</th>
            <th>
              <span className="large-screen">Points</span>
              <span className="small-screen">Pts</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="p-table__club">A C Milano</td>
            <td>13 </td>
            <td>11</td>
            <td>2</td>
            <td>0</td>
            <td>31</td>
            <td>35</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="p-table__club">FC Leytonstone</td>
            <td>14</td>
            <td>9</td>
            <td>1</td>
            <td>4</td>
            <td>9</td>
            <td>28</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="p-table__club">Uplands Town</td>
            <td>13</td>
            <td>7</td>
            <td>0</td>
            <td>6</td>
            <td>11</td>
            <td>21</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="p-table__club">Sth Ilford Catholics</td>
            <td>11</td>
            <td>6</td>
            <td>2</td>
            <td>3</td>
            <td>5</td>
            <td>20</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="p-table__club">Wolfpack</td>
            <td>12</td>
            <td>6</td>
            <td>2</td>
            <td>4</td>
            <td>1</td>
            <td>20</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="p-table__club">Rainham WMC FC</td>
            <td>15</td>
            <td>5</td>
            <td>0</td>
            <td>10</td>
            <td>-21</td>
            <td>15</td>
          </tr>
          <tr>
            <td>7</td>
            <td className="p-table__club">Eva Hart</td>
            <td>12 </td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>-6</td>
            <td>13</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="p-table__club">Loxford Lions</td>
            <td>10</td>
            <td>3</td>
            <td>1</td>
            <td>6</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>9 </td>
            <td className="p-table__club">Hainault Athletic</td>
            <td>10 </td>
            <td>3</td>
            <td>0</td>
            <td>7</td>
            <td>-13</td>
            <td>9</td>
          </tr>
          <tr className="p-table__highlighted">
            <td>10</td>
            <td className="p-table__club">Sher Force</td>
            <td>12</td>
            <td>2</td>
            <td>0</td>
            <td>10</td>
            <td>-20</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
