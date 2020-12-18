export const poiOverlay = () => {
  return `<div id="poi-overlay" style="margin-right: 5px; width: 100%; height: 100%">
  <div style="margin-right: 20px">
    <table id="poi-data-table">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 60%" />
        <col style="width: 20%" />
      </colgroup>
      <tr>
      <th>Type</th>
        <th>Name</th>
        <th>Locate</th>
      </tr>
      <div id="poi-warning">POI data will appear here when you have searched for a country.</div>
    </table>
  </div>
</div>`;
};
