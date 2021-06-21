from selenium import webdriver
import pandas as pd
from bs4 import BeautifulSoup
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.options import Options


driver = webdriver.Chrome("C:/Abschlussproject/abschlussprojekt/chromedriver.exe")

url1 = pd.read_excel(r'Klinikliste.xlsx')[1:16]["Link Google Maps"]


driver.get(url1[1])

driver.find_element_by_xpath('/html/body/c-wiz/div/div/div/div[2]/div[1]/div[4]/form/div[1]/div/button/span').click()
time.sleep(4)


#scrolling
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
SCROLL_PAUSE_TIME = 0.5
time.sleep(2)


driver.find_element_by_css_selector('.widget-pane-link').click()

content = driver.page_source
beautisoup = BeautifulSoup(content, 'html.parser')

#scrolling
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
SCROLL_PAUSE_TIME = 0.5



ratings = []
reviews = []
departments = []
dates = []
likes = []

rating = driver.find_elements_by_xpath('//div[@class="ODSEW-ShBeI-jfdpUb"]/span[2]')
review = driver.find_element_by_xpath('//[@div/div/div[1]/div/div/div[32]/div/div[3]/div[2]/div/div/a/div[2]/span[2]')
department = driver.find_element_by_xpath('//div[@class="ODSEW-ShBeI-ShBeI-content"]/span[2]')
date = driver.find_element_by_xpath('//span[@class="ODSEW-ShBeI-RgZmSc-date"]')
like = driver.find_element_by_xpath('//button[@class="ODSEW-ShBeI-Sc2xXc-LgbsSe"]/span/span[2]')


for txt in rating:
    ratings = txt.get_attribute("aria-label")[1]

for txt in review:
    reviews = txt.text

for txt in department:
    departments = txt.text

for txt in date:
    dates = txt.text        

for txt in like:
    likes = txt.text

df = pd.DataFrame(zip(ratings,reviews,departments,dates,likes), columns=["Rating","Reviw","Department","Date",'Likes'])
df.to_csv('GoogleMaps.csv', index=False)    





for ele in driver.find_all("div", attrs={"class": "x3AX1-LfntMc-header-title-ma6Yeb-haAclf"}):
     # title = ele.find("span", attrs={"jstcache":"128"})
     # titles.append(title.text)
     date = driver.findElement(By.xpath("//*[@id="pane"]/div/div[1]/div/div/div[32]/div/div[3]/div[3]/div[1]/span[3]"))
     dates.append(date.text)
     department = ele.find.element #(//*[@id="pane"]/div/div[1]/div/div/div[32]/div/div[3]/div[3]/div[1]/span[2])
     departments.append(department.text) 
     review = ele.find("span", attrs={"jstcache":"509"})
     reviews.append(review.text)

     rating = ele.find("span", attrs={"jstcache":"408"})
     ratings.append(rating.text)

     like = ele.find("span", attrs={"jstcache":"507"})
     likes.append(like.text)


 for ele in beautisoup.find_all("section", attrs={"class":"rating"}):


 for ele in beautisoup.find_all("div", attrs={"class": "klinik-normal"}):
     name = ele.find("h1")
     names.append(name.text)
 names = names * x
 ratings = ratings * x
 df = pd.DataFrame({'Klinik_Name': names, 'Title': titles, 'Date': dates,
                    'Department': departments, 'rating': ratings, 'Erfahrungsbericht & Review': reviews})
 df.to_csv('D:/refugeeks_project/selenium_py/p1_py/klinik1_liste1.csv',
           index=False, encoding='utf-8')














