from selenium import webdriver
import pandas as pd
from bs4 import BeautifulSoup
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.options import Options


driver = webdriver.Chrome("C:/selenium beispiel/chromedriver.exe")

url1 = pd.read_excel(r'Klinikliste.xlsx')[1:4]["Link Google Maps"]

#url = "https://www.google.de"
driver.get(url1[1])

driver.find_element_by_xpath('/html/body/c-wiz/div/div/div/div[2]/div[1]/div[4]/form/div[1]/div/button/span').click()
time.sleep(4)


#scrolling
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
SCROLL_PAUSE_TIME = 0.5


driver.find_element_by_css_selector('.widget-pane-link').click()

content = driver.page_source
beautisoup = BeautifulSoup(content, 'html.parser')
""""""
names = []
ratings = []
reviews = []
departments = []
dates = []
titles = []


driver.get(url)
driver.find_element_by_xpath('/html/body/c-wiz/div/div/div/div[2]/div[1]/div[4]/form/div[1]/div/button/span').click()

#scrolling
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
SCROLL_PAUSE_TIME = 0.5




for ele in beautisoup.find_all("div", attrs={"class": "x3AX1-LfntMc-header-title-ma6Yeb-haAclf"}):
    title = ele.find("span", attrs={"jstcache":"128"})
    titles.append(title.text)
    date = ele.find("time")
    dates.append(date.text)
    department = ele.find("a", href=True)
    departments.append(department.text)
    review = ele.find("p")
    reviews.append(review.text)

    rating = ele.find("dd")
    ratings.append(rating.text)

x = len(titles)

# for ele in beautisoup.find_all("section", attrs={"class":"rating"}):


for ele in beautisoup.find_all("div", attrs={"class": "klinik-normal"}):
    name = ele.find("h1")
    names.append(name.text)
names = names * x
#ratings = ratings * x
df = pd.DataFrame({'Klinik_Name': names, 'Title': titles, 'Date': dates,
                   'Department': departments, 'rating': ratings, 'Erfahrungsbericht & Review': reviews})
df.to_csv('D:/refugeeks_project/selenium_py/p1_py/klinik1_liste1.csv',
          index=False, encoding='utf-8')














# Get scroll height
last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
    time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == last_height:
        break
    last_height = new_height

    label.sendKeys(Keys.PAGE_DOWN);