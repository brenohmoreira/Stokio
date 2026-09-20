CREATE TABLE st_UnitOfMeasure (
  id INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(150) NOT NULL,
  decimal_places INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,

  CONSTRAINT CK_UnitOfMeasure_DecimalPlaces CHECK (decimal_places BETWEEN 0 AND 6)
);

CREATE TABLE st_Category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150) UNIQUE NOT NULL,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME
);

CREATE TABLE st_Brand (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150) UNIQUE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME
);

CREATE TABLE st_Product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sku VARCHAR(100) UNIQUE,
  barcode VARCHAR(200) UNIQUE,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  category_id INT NOT NULL,
  brand_id INT NOT NULL,
  unit_of_measure_id INT NOT NULL,
  cost_price DECIMAL(18,2) NOT NULL,
  sale_price DECIMAL(18,2) NOT NULL,
  stock_minimum DECIMAL(18,3) NOT NULL,
  stock_maximum DECIMAL(18,3) NOT NULL,
  allows_negative_stock BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME,

  CONSTRAINT FK_Product_Category FOREIGN KEY (category_id) REFERENCES st_Category(id),
  CONSTRAINT FK_Product_Brand FOREIGN KEY (brand_id) REFERENCES st_Brand(id),
  CONSTRAINT FK_Product_UnitOfMeasure FOREIGN KEY (unit_of_measure_id) REFERENCES st_UnitOfMeasure(id),
  CONSTRAINT CK_Product_CostPrice CHECK (cost_price >= 0),
  CONSTRAINT CK_Product_SalePrice CHECK (sale_price >= 0),
  CONSTRAINT CK_Product_StockMinimum CHECK (stock_minimum >= 0),
  CONSTRAINT CK_Product_StockMaximum CHECK (stock_maximum >= stock_minimum)
);