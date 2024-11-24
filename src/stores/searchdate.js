let yearToSearch = window.localStorage.getItem("yearToSearch");
let monthToSearch = window.localStorage.getItem("monthToSearch");
const actualDate = new Date();

if (yearToSearch == null) {
    yearToSearch = actualDate.getFullYear();
}
if (monthToSearch == null) {
    monthToSearch = actualDate.getMonth() + 1;
}

export default {
    yearToSearch: yearToSearch,
    monthToSearch: monthToSearch,
    setYearToSearch(year) {
        this.yearToSearch = year;
        window.localStorage.setItem("yearToSearch", this.yearToSearch);
    },
    setMonthToSearch(month) {
        this.monthToSearch = month;
        window.localStorage.setItem("monthToSearch", this.monthToSearch);
    },
    getNextTenYears(startYear = 2024) {
        const years = [];
        for (let i = 0; i < 10; i++) {
            years.push(startYear + i);
        }
        return years;
    }
}