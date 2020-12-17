export const poiOverlay = () => {
  return `<div id="poi-overlay" style="margin-right: 5px; width: 100%; height: 100%">
  <div style="margin-right: 20px">
    <table id="poi-data-test">
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 25%" />
        <col style="width: 25%" />
        <col style="width: 10%" />
      </colgroup>
      <tr>
        <th>10</th>
        <th>30</th>
        <th>25</th>
        <th>25</th>
        <th>10</th>
      </tr>
      <div id="poi-warning">POI data will appear here when you have searched for a country.</div>
    </table>
  </div>
</div>`;
};
