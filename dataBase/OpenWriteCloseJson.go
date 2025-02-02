package dataBase

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"reflect"
)

var DataWorkes []WorkersData

type Employee struct {
	Id   int64  `json:"Id"`
	Text string `json:"Text"`
}
type Company struct {
	Employees []Employee `json:"Employees"`
}

func ReadJSONFromFile(filename string, v interface{}) error {
	filename = "jsons/" + filename
	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	if err := decoder.Decode(v); err != nil {
		return err
	}

	return nil
}
func WriteJSONToFile(filename string, v interface{}) error {
	filename = "jsons/" + filename
	file, err := os.Create(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	if err := encoder.Encode(v); err != nil {
		return err
	}

	return nil
}

type Data struct {
	AdminMain string
	AdminId   int64
}
type WorkersData struct {
	WorkersName string
	WorkersID   int64
}
type Calc_parameters struct {
	FORMA_SOBSTVENNOSTI_option1 float64 `json:"FORMA_SOBSTVENNOSTI_option1"`
	FORMA_SOBSTVENNOSTI_option2 float64 `json:"FORMA_SOBSTVENNOSTI_option2"`
	FORMA_SOBSTVENNOSTI_option3 float64 `json:"FORMA_SOBSTVENNOSTI_option3"`
	FORMA_SOBSTVENNOSTI_option4 float64 `json:"FORMA_SOBSTVENNOSTI_option4"`
	FORMA_SOBSTVENNOSTI_option5 float64 `json:"FORMA_SOBSTVENNOSTI_option5"`
	FORMA_SOBSTVENNOSTI_option6 float64 `json:"FORMA_SOBSTVENNOSTI_option6"`
	FORMA_SOBSTVENNOSTI_option7 float64 `json:"FORMA_SOBSTVENNOSTI_option7"`
	FORMA_SOBSTVENNOSTI_option8 float64 `json:"FORMA_SOBSTVENNOSTI_option8"`

	Platezhka_kontragentu_option1 float64 `json:"Platezhka_kontragentu_option1"`
	Platezhka_kontragentu_option2 float64 `json:"Platezhka_kontragentu_option2"`
	Platezhka_kontragentu_option3 float64 `json:"Platezhka_kontragentu_option3"`
	Platezhka_kontragentu_option4 float64 `json:"Platezhka_kontragentu_option4"`
	Platezhka_kontragentu_option5 float64 `json:"Platezhka_kontragentu_option5"`
	Platezhka_kontragentu_option6 float64 `json:"Platezhka_kontragentu_option6"`

	PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5     float64 `json:"PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_5"`
	PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20    float64 `json:"PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_20"`
	PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50    float64 `json:"PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_do_50"`
	PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50 float64 `json:"PERVIChKA_VHODYaShchAYa_option1_pervichka_vh_bolee_50"`

	PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5     float64 `json:"PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_5"`
	PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20    float64 `json:"PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_20"`
	PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50    float64 `json:"PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_do_50"`
	PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50 float64 `json:"PERVIChKA_VHODYaShchAYa_option2_pervichka_vh_bolee_50"`

	PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5     float64 `json:"PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_5"`
	PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20    float64 `json:"PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_20"`
	PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50    float64 `json:"PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_do_50"`
	PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50 float64 `json:"PERVIChKA_ISHODYaShchAYa_option1_pervichka_ish_bolee_50"`

	PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5     float64 `json:"PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_5"`
	PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20    float64 `json:"PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_20"`
	PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50    float64 `json:"PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_do_50"`
	PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50 float64 `json:"PERVIChKA_ISHODYaShchAYa_option2_pervichka_ish_bolee_50"`

	OZON_option1 float64 `json:"OZON_option1"`
	OZON_option2 float64 `json:"OZON_option2"`
	OZON_option3 float64 `json:"OZON_option3"`
	OZON_option4 float64 `json:"OZON_option4"`

	WB_option1 float64 `json:"WB_option1"`
	WB_option2 float64 `json:"WB_option2"`
	WB_option3 float64 `json:"WB_option3"`
	WB_option4 float64 `json:"WB_option4"`

	PATENT_value                                float64 `json:"PATENT_value"`
	Kadry_IP_value                              float64 `json:"Kadry_IP_value"`
	PROIZVODSTVO_BAZA_value                     float64 `json:"PROIZVODSTVO_BAZA_value"`
	DOP_PATENT_value                            float64 `json:"DOP_PATENT_value"`
	Sotrudniki_RF_value                         float64 `json:"Sotrudniki_RF_value"`
	Sotrudniki_nerezidenty_value                float64 `json:"Sotrudniki_nerezidenty_value"`
	Bankovskaya_vypiska_bolee_100_pozicij_value float64 `json:"Bankovskaya_vypiska_bolee_100_pozicij_value"`
	PKO_RKO_value                               float64 `json:"PKO_RKO_value"`
	Kassovaya_kniga_value                       float64 `json:"Kassovaya_kniga_value"`
	Avansovyj_otchet_10_chekov_value            float64 `json:"Avansovyj_otchet_10_chekov_value"`
	Avansovyj_otchet_50_chekov_value            float64 `json:"Avansovyj_otchet_50_chekov_value"`
	AKTY_SVEROK_na_1_kontragenta_value          float64 `json:"AKTY_SVEROK_na_1_kontragenta_value"`
	OSNOVNOE_SREDSTVO_value                     float64 `json:"OSNOVNOE_SREDSTVO_value"`
	UChET_GSM_value                             float64 `json:"UChET_GSM_value"`
	DOGOVOR_ZAJMA_value                         float64 `json:"DOGOVOR_ZAJMA_value"`
	DOGOVOR_KREDITA_value                       float64 `json:"DOGOVOR_KREDITA_value"`
	DOGOVOR_LIZINGA_value                       float64 `json:"DOGOVOR_LIZINGA_value"`
	VED_value                                   float64 `json:"VED_value"`
}

func UpdateField(structPtr interface{}, fieldName string, newValue float64) error {
	// Проверка на тип structPtr
	valueOf := reflect.ValueOf(structPtr).Elem()
	if valueOf.Kind() != reflect.Struct {
		return fmt.Errorf("Provided value is not a struct pointer")
	}

	// Получение значения поля по имени
	fieldValue := valueOf.FieldByName(fieldName)
	if !fieldValue.IsValid() {
		return fmt.Errorf("Field %s not found in the structure", fieldName)
	}

	// Проверка типа поля
	if fieldValue.Kind() != reflect.Float64 {
		return fmt.Errorf("Field %s is not of type float64", fieldName)
	}

	// Установка нового значения
	fieldValue.SetFloat(newValue)
	return nil
}

func SaveCalc_parametresAsFile(structPtr *Calc_parameters, filename string) error {
	filename = "jsons/" + filename
	dataBytes, err := json.Marshal(&structPtr)
	if err != nil {
		return err
	}

	err = os.WriteFile(filename, dataBytes, 0644)
	if err != nil {
		return err
	}
	return nil
}
func SaveCalc_parametresAsString(structPtr *Calc_parameters) (string, error) {
	dataBytes, err := json.Marshal(&structPtr)
	if err != nil {
		return "", err
	}
	return string(dataBytes), nil
}
func CheckFile(filename string) error {
	_, err := os.Stat(filename)
	if os.IsNotExist(err) {
		_, err := os.Create(filename)
		if err != nil {
			return err
		}
	}
	return nil
}

func ShowMainAdmin() (string, int64) {
	CheckFile("jsons/Admin.json")
	content, err := ioutil.ReadFile("jsons/Admin.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}
	var mainAdmin Data
	err = json.Unmarshal(content, &mainAdmin)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}
	return mainAdmin.AdminMain, mainAdmin.AdminId
}
func ShowWorkersIDs() []WorkersData {
	file, err := ioutil.ReadFile("jsons/Workers.json")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	data := []WorkersData{}
	err = json.Unmarshal(file, &data)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return data
}
func DeleteWorkerjson(index int) error {
	fmt.Println("Начато удаление сорудника внутри файла ///////////////////////////////////////////////")
	filename := "jsons/Workers.json"
	err := CheckFile(filename)
	if err != nil {
		return err
	}
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		return err
	}
	data := []WorkersData{}

	json.Unmarshal(file, &data)
	fmt.Println("В json мы нашли: ", data)
	var copy []WorkersData
	for i, v := range data {
		if i != index {
			copy = append(copy, v)
		}
	}
	DataWorkes = copy
	dataBytes, err := json.Marshal(copy)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile(filename, dataBytes, 0644)
	if err != nil {
		return err
	}
	return nil
}
func AddWorker(a WorkersData) error {
	filename := "jsons/Workers.json"
	err := CheckFile(filename)
	if err != nil {
		return err
	}
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		return err
	}
	data := []WorkersData{}

	json.Unmarshal(file, &data)
	fmt.Println("В json мы нашли: ", data)
	data = append(data, a)
	DataWorkes = data
	dataBytes, err := json.Marshal(data)
	if err != nil {
		return err
	}

	err = ioutil.WriteFile(filename, dataBytes, 0644)
	if err != nil {
		return err
	}
	return nil
}
